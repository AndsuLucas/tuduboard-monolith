<?php

namespace Tests\Unit;

use App\Entities\BoardTask\Task;
use PHPUnit\Framework\TestCase;
use Illuminate\Support\Str;


class BoardTaskTest extends TestCase
{
    public function testFillTasks()
    {
        $data = [
            'id' => strval(Str::uuid()),
            'title' => 'task1',
            'notes' => 'notes',
            'repeat' => true,
            'column' => 'to-do'
        ];

        $task = new Task($data);
        $this->assertEquals($data['id'], $task->id);
        $this->assertEquals($data['title'], $task->title);
        $this->assertEquals($data['notes'], $task->notes);
        $this->assertEquals($data['repeat'], $task->repeat);
        $this->assertEquals($data['column'], $task->parentColumn);
    }
}