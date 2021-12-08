<?php

namespace App\Repository;

use App\Entity\Customer;
use App\InterfaceRepository\TimeFrame;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Customer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Customer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Customer[]    findAll()
 * @method Customer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerRepository extends ServiceEntityRepository implements TimeFrame
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Customer::class);
    }

    public function findMinAndMaxId(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT min(id) as minId, max(id) as maxId FROM customer
            ';
        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery();

        return $result->fetchAllAssociative();
    }

    public function getTimeFrameData(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT COUNT(id) as customers, create_date FROM `customer` 
            WHERE create_date > NOW() - INTERVAL 1 MONTH
            GROUP BY DAY(create_date), MONTH(create_date), YEAR(create_date) ORDER BY create_date DESC
            ';
        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery();

        return $result->fetchAllAssociative();
    }

    public function findTotalCustomers($startDate, $endDate){
        return $this->createQueryBuilder('c')
            ->andWhere('c.createDate >= :val1')
            ->andWhere('c.createDate <= :val2')
            ->setParameter('val1', $startDate)
            ->setParameter('val2', $endDate)
            ->getQuery()
            ->getResult();
    }
}
