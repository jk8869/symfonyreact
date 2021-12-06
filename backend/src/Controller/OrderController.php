<?php

namespace App\Controller;

use App\Entity\Order;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    /**
     * @Route("/orders", name="orders")
     */
    public function orders(ManagerRegistry $doctrine, Request $request): Response
    {
        $startDate = $request->get('startDate');
        $endDate = $request->get('endDate');

        $repository = $doctrine->getRepository(Order::class);
        $orders = $repository->findTotalOrders($startDate, $endDate);

        $response = new Response(json_encode(array('total' => sizeof($orders))));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
