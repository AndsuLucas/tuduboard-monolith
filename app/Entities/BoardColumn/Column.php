<?php

declare(strict_types=1);

namespace App\Entities\BoardColumn;

use Andsu\Easyentity\Behavior\Attributes\Cast;
use App\Entities\BaseEntity;
use App\Entities\BoardTask\Task;

class Column extends BaseEntity
{
    protected string $id;

    protected string $presentationName;

    /**
     * @var array<Task>
     */
    protected array $tasks;

    /**
     * @var array<string>
     */
    #[Cast('json_decode')]
    protected array $taskOrder;
}