<?php

namespace App\Controller;

use App\Entity\Note;
use App\Form\NoteType;
use App\Repository\NoteRepository;
use App\Security\Voter\NoteVoter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/notes')]
class NoteController extends AbstractController
{
    #[Route('/', name: 'app_note_index', methods: ['GET'])]
    public function index(NoteRepository $noteRepository): Response
    {
        /*return new JsonResponse([
            'notes' => $noteRepository->findBy(['user' => $this->getUser()])
        ]);*/
        return new JsonResponse([
            'notes' => $noteRepository->findAll()
        ]);
    }

    #[Route('/', name: 'app_note_new', methods: ['POST'])]
    public function new(Request $request, NoteRepository $noteRepository): Response
    {
        $note = new Note();
        $form = $this->createForm(NoteType::class, $note);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $note->setUser($this->getUser());
            $noteRepository->save($note);
            return new JsonResponse(['note' => $note], Response::HTTP_CREATED);
        }

        return new JsonResponse([
            'errors' => $form->getErrors()
        ], Response::HTTP_BAD_REQUEST);
    }

    #[Route('/{id}', name: 'app_note_show', methods: ['GET'])]
    public function show(Note $note): Response
    {
        //$this->denyAccessUnlessGranted(NoteVoter::VIEW, $note);

        return new JsonResponse(['note' => $note]);
    }

    #[Route('/{id}', name: 'app_note_edit', methods: ['PUT'])]
    public function edit(Request $request, Note $note, NoteRepository $noteRepository): Response
    {
        //$this->denyAccessUnlessGranted(NoteVoter::EDIT, $note);

        $form = $this->createForm(NoteType::class, $note);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $noteRepository->save($note);
            return new JsonResponse(['note' => $note], Response::HTTP_OK);
        }

        return new JsonResponse([
            'errors' => $form->getErrors()
        ], Response::HTTP_BAD_REQUEST);
    }

    #[Route('/{id}', name: 'app_note_delete', methods: ['DELETE'])]
    public function delete(Request $request, Note $note, NoteRepository $noteRepository): Response
    {
        $this->denyAccessUnlessGranted(NoteVoter::EDIT, $note);

        $noteRepository->remove($note);

        return new JsonResponse([], Response::HTTP_OK);
    }
}
