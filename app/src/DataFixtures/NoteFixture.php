<?php

namespace App\DataFixtures;

use App\Entity\Note;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;

class NoteFixture extends Fixture
{

    private Generator $faker;

    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager): void
    {

        $users = $this->createUsers($manager);

        for ($i = 0; $i < 50; $i++) {
            $manager->persist($this->createNote($this->getRandomUser($users)));
        }

        $manager->flush();
    }

    private function createUsers(ObjectManager $manager): array
    {
        $users = [];
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $email = $this->faker->email();
            $user->setEmail($email)
                ->setPassword($email)
                ->setRoles(['ROLE_USER']);
            $manager->persist($user);
            $users[] = $user;
        }
        return $users;
    }

    private function createNote(User $user): Note
    {
        $note = new Note();
        $note
            ->setTitle($this->faker->sentence())
            ->setContent($this->faker->realText())
            ->setUser($user);
        return $note;
    }

    private function getRandomUser(array $users): User
    {
        return $users[array_rand($users)];
    }


}
