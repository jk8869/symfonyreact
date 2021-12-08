<?php

namespace App\Repository;

use App\Entity\OrderItems;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method OrderItems|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderItems|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderItems[]    findAll()
 * @method OrderItems[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderItemsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderItems::class);
    }

    public function findTotalRevenue($startDate, $endDate): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT sum(a.price) AS revenue FROM order_items a
            INNER JOIN `order` b ON a.order_header_id = b.id
            WHERE b.purchase_date >= :val1 AND b.purchase_date <= :val2
            ';
        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery(array(':val1' => $startDate, ':val2' => $endDate));

        return $result->fetchAllAssociative();
    }
}
