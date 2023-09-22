<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class BoardTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Inertia::render('BoardTask/BoardTaskView', [
        'id' => '1',
        //'dayOfWeek' => 2,
        'currentBoardState' => [
            
                [
                    'id' => 'to-do',
                    'presentationName' => 'To-do',
                    'tasks' => [
                        [
                            'id' => '1',
                            'title' => 'task1',
                            'notes' => 'notes',
                            'repeat' => true,
                            'board' => 'to-do'
                        ],
                        [
                            'id' => '2',
                            'title' => 'task2',
                            'notes' => 'notes',
                            'repeat' => true,
                            'board' => 'to-do'
                        ],
                        [
                            'id' => '3',
                            'title' => 'task2',
                            'notes' => 'notes',
                            'repeat' => true,
                            'board' => 'to-do'
                        ],
                        [
                            'id' => '4',
                            'title' => 'task4',
                            'notes' => 'notes',
                            'repeat' => true,
                            'board' => 'to-do'
                        ],
                    ],
                    'tasksOrder' => ['3', '2', '1', '4']
                ],
                [
                    'id' => 'doing',
                    'presentationName' => 'Doing',
                    'tasks' => [],
                    'tasksOrder' => []
                ],
                [
                    'id' => 'closed',
                    'presentationName' => 'Closed',
                    'tasks' => [],
                    'tasksOrder' => []
                ]
        ]
       ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $columns = [
            'columns' => [
                [
                    'id' => 'to-do',
                    'presentationName' => 'To-do'
                ],
                [
                    'id' => 'doing',
                    'presentationName' => 'Doing'
                ],
                [
                    'id' => 'closed',
                    'presentationName' => 'Closed'
                ],
            ]
        ];

        return Inertia::render('BoardTask/CreateBoardTaskForm', $columns);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
