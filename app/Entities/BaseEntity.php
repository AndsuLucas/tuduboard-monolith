<?php

declare(strict_types=1);

namespace App\Entities;

use Andsu\Easyentity\Base\EasyEntity;

abstract class BaseEntity extends EasyEntity
{
    public function fillEntity($data) {
        $this->fill($data);
    }
}