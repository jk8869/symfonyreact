<?php

namespace App\Controller;

use App\Entity\Order;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    /**
     * @Route("/orders", name="orders")
     */
    public function orders(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $orders = $entityManager->getRepository(Order::class)->findAll();

        $response = new Response(json_encode(array('total' => sizeof($orders))));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
