<?php

namespace App\Controller;

use App\Entity\Customer;
use App\Entity\Order;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TimeFrameController extends AbstractController
{
    /**
     * @Route("/timeframe", name="timeframe")
     */
    public function timeFrame(ManagerRegistry $doctrine): Response
    {
        $orderRepository = $doctrine->getRepository(Order::class);
        $orderTimeFrameData = $orderRepository->getTimeFrameData();
        $responseData = [];
        foreach ($orderTimeFrameData as $data){
            $responseData['orders'][] = array(
                'orders'    => $data['orders'],
                'date'      => $data['purchase_date'],
            );
        }

        $customerRepository = $doctrine->getRepository(Customer::class);
        $customerTimeFrameData = $customerRepository->getTimeFrameData();
        foreach ($customerTimeFrameData as $data){
            $responseData['customers'][] = array(
                'customers' => $data['customers'],
                'date'      => $data['create_date'],
            );
        }
        $response = new Response(json_encode($responseData));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
