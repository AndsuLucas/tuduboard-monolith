<?php

namespace Tests\Unit;

use App\Entities\BoardTask\Task;
use PHPUnit\Framework\TestCase;
use Illuminate\Support\Str;
use App\Entities\BoardColumn\Column;

class BoardColumnTest extends TestCase
{
    public function testFillColumns()
    {
        $taskUid = strval(Str::uuid());
        $data = [
            'id' => strval(Str::uuid()),
            'presentationName' => 'To-do',
            'tasks' => [new Task([
                'id' => $taskUid,
                'title' => 'task1',
                'notes' => 'notes',
                'repeat' => true,
                'column' => 'to-do'
            ])],
            'taskOrder' => json_encode([$taskUid]),
        ];

        $expectedTaskOrder = [$taskUid];
        $boardColumn = new Column($data);
        $this->assertEquals($data['id'], $boardColumn->id);
        $this->assertEquals($data['presentationName'], $boardColumn->presentationName);
        $this->assertEquals($data['tasks'], $boardColumn->tasks);
        $this->assertEquals($expectedTaskOrder, $boardColumn->taskOrder);
    }
}