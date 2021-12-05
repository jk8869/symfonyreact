<?php

namespace App\Controller;

use App\Entity\OrderItems;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderItemsController extends AbstractController
{
    /**
     * @Route("/revenue", name="revenue")
     */
    public function revenue(ManagerRegistry $doctrine): Response
    {
        $repository = $doctrine->getRepository(OrderItems::class);
        $revenue = $repository->findTotalRevenue();
        $revenue = sizeof($revenue) > 0?  $revenue[0]['revenue']: 0;
        $response = new Response(json_encode(array('revenue' => $revenue)));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
