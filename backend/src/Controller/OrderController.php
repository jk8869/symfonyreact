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

    /**
     * @Route("/timeframe", name="timeframe")
     */
    public function timeFrame(ManagerRegistry $doctrine): Response
    {
        $repository = $doctrine->getRepository(Order::class);
        $timeFrameData = $repository->getTimeFrameData();
        $responseData = [];
        foreach ($timeFrameData as $data){
            $responseData[] = array(
                'customers' => $data['customers'],
                'orders'    => $data['orders'],
                'date'      => $data['purchase_date'],
            );
        }
        $response = new Response(json_encode($responseData));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
