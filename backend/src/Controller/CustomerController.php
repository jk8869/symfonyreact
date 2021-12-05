<?php

namespace App\Controller;

use App\Entity\Customer;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CustomerController extends AbstractController
{
    /**
     * @Route("/customers", name="customers")
     */
    public function customers(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $customers = $entityManager->getRepository(Customer::class)->findAll();

        $response = new Response(json_encode(array('total' => sizeof($customers))));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
