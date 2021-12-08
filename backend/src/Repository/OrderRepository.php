<?php

namespace App\Repository;

use App\Entity\Order;
use App\InterfaceRepository\TimeFrame;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Order|null find($id, $lockMode = null, $lockVersion = null)
 * @method Order|null findOneBy(array $criteria, array $orderBy = null)
 * @method Order[]    findAll()
 * @method Order[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRepository extends ServiceEntityRepository implements TimeFrame
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
    }

    public function findMinAndMaxId(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT min(id) as minId, max(id) as maxId FROM `order`
            ';
        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery();
        return $result->fetchAllAssociative();
    }

    public function getTimeFrameData(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT count(id) as orders, purchase_date FROM `order` 
            WHERE purchase_date > NOW() - INTERVAL 1 MONTH
            GROUP BY DAY(purchase_date), MONTH(purchase_date), YEAR(purchase_date) ORDER BY purchase_date DESC
            ';
        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery();

        return $result->fetchAllAssociative();
    }

    public function findTotalOrders($startDate, $endDate){
        return $this->createQueryBuilder('c')
            ->andWhere('c.purchase_date >= :val1')
            ->andWhere('c.purchase_date <= :val2')
            ->setParameter('val1', $startDate)
            ->setParameter('val2', $endDate)
            ->getQuery()
            ->getResult();
    }
}
