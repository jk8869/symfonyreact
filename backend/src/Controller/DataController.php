<?php

namespace App\Controller;

use App\Entity\Customer;
use App\Entity\Order;
use App\Entity\OrderItems;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DataController extends AbstractController
{
    /**
     * @Route("/data", name="data")
     */
    public function index(ManagerRegistry $doctrine): Response
    {
        set_time_limit(300);
        $firstname = array(
            'Johnathon',
            'Anthony',
            'Erasmo',
            'Raleigh',
            'Nancie',
            'Tama',
            'Camellia',
            'Augustine',
            'Christeen',
            'Luz',
            'Diego',
            'Lyndia',
            'Thomas',
            'Georgianna',
            'Leigha',
            'Alejandro',
            'Marquis',
            'Joan',
            'Stephania',
            'Elroy',
            'Zonia',
            'Buffy',
            'Sharie',
            'Blythe',
            'Gaylene',
            'Elida',
            'Randy',
            'Margarete',
            'Margarett',
            'Dion',
            'Tomi',
            'Arden',
            'Clora',
            'Laine',
            'Becki',
            'Margherita',
            'Bong',
            'Jeanice',
            'Qiana',
            'Lawanda',
            'Rebecka',
            'Maribel',
            'Tami',
            'Yuri',
            'Michele',
            'Rubi',
            'Larisa',
            'Lloyd',
            'Tyisha',
            'Samatha',
        );

        $lastname = array(
            'Mischke',
            'Serna',
            'Pingree',
            'Mcnaught',
            'Pepper',
            'Schildgen',
            'Mongold',
            'Wrona',
            'Geddes',
            'Lanz',
            'Fetzer',
            'Schroeder',
            'Block',
            'Mayoral',
            'Fleishman',
            'Roberie',
            'Latson',
            'Lupo',
            'Motsinger',
            'Drews',
            'Coby',
            'Redner',
            'Culton',
            'Howe',
            'Stoval',
            'Michaud',
            'Mote',
            'Menjivar',
            'Wiers',
            'Paris',
            'Grisby',
            'Noren',
            'Damron',
            'Kazmierczak',
            'Haslett',
            'Guillemette',
            'Buresh',
            'Center',
            'Kucera',
            'Catt',
            'Badon',
            'Grumbles',
            'Antes',
            'Byron',
            'Volkman',
            'Klemp',
            'Pekar',
            'Pecora',
            'Schewe',
            'Ramage',
        );

        $country = array('Sweden', 'Denmark', 'Finland', 'Germany', 'England', 'Stony');
        $device = array('Android', 'IOS', 'Mac', 'Windows');

        $entityManager = $doctrine->getManager();

        for($i = 0; $i < 100; $i++){
            $customer = new Customer();
            $customer->setFirstName($firstname[rand ( 0 , count($firstname) -1)]);
            $customer->setLastName($lastname[rand ( 0 , count($lastname) -1)] . ($i + 1));
            $customer->setEmail('example'.($i + 1).'@email.com');

            $entityManager->persist($customer);
            $entityManager->flush();
        }

        $repository = $doctrine->getRepository(Customer::class);
        $minMaxId = $repository->findMinAndMaxId();

        for($i = 0; $i < 1000; $i++){
            $randCustomer = rand($minMaxId[0]['minId'], $minMaxId[0]['maxId']);

            $customer = $entityManager->getRepository(Customer::class)->find($randCustomer);

            $order = new Order();
            $order->setCustomer($customer);

            $start = strtotime("10 September 2019");
            $end = strtotime("05 December 2020");

            $timestamp = mt_rand($start, $end);
            $randomDate = date("Y-m-d H:i:s", $timestamp);

            $order->setPurchaseDate(new DateTime($randomDate));
            $order->setCountry($country[rand ( 0 , count($country) -1)]);
            $order->setDevice($device[rand ( 0 , count($device) -1)]);

            $entityManager->persist($order);
            $entityManager->flush();
        }

        $repository = $doctrine->getRepository(Order::class);
        $minMaxId = $repository->findMinAndMaxId();

        for($i = 0; $i < 4000; $i++){
            $randOrder = rand($minMaxId[0]['minId'], $minMaxId[0]['maxId']);

            $order = $entityManager->getRepository(Order::class)->find($randOrder);

            $orderItems = new OrderItems();
            $orderItems->setOrderHeader($order);
            $orderItems->setEan($this->generateEAN());
            $orderItems->setQuantity(rand(1, 100));
            $orderItems->setPrice(rand(100, 1000));

            $entityManager->persist($orderItems);
            $entityManager->flush();
        }
    }

    private function generateEAN()
    {
        $date = new DateTime();
        $time = $date->getTimestamp();

        $code = '20' . str_pad($time, 10, '0');
        $weightFlag = true;
        $sum = 0;

        for ($i = strlen($code) - 1; $i >= 0; $i--) {
            $sum += (int)$code[$i] * ($weightFlag ? 3 : 1);
            $weightFlag = !$weightFlag;
        }
        $code .= (10 - ($sum % 10)) % 10;
        return $code;
    }
}
