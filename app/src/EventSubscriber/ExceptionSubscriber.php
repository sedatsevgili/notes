<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Twig\Environment;

class ExceptionSubscriber implements EventSubscriberInterface
{

    private Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function onKernelException(ExceptionEvent $event)
    {
        if ('json' !== $event->getRequest()->getContentType() && $event->getThrowable() instanceof NotFoundHttpException) {
            $response = new Response($this->twig->render('index/index.html.twig'));
            $event->setResponse($response);
            return;
        }
        $response = new JsonResponse([
            'error' => [
                'message' => $event->getThrowable()->getMessage(),
                'code' => $event->getThrowable()->getCode()
            ]
        ]);
        $response->headers->set('Content-Type', 'application/json');
        $event->setResponse($response);
    }

    public static function getSubscribedEvents()
    {
        return [
            'kernel.exception' => 'onKernelException',
        ];
    }
}
