<?php

declare(strict_types=1);

namespace App\Entities\BoardTask;

use Andsu\Easyentity\Behavior\Attributes\Addapt;
use App\Entities\BaseEntity;

class Task extends BaseEntity
{
    protected string $id;

    protected string $title;

    protected string $notes;

    protected bool $repeat;

    #[Addapt(['column'])]
    protected string $parentColumn;
}