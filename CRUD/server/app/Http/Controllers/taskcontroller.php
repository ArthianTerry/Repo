<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class taskcontroller extends Controller
{
    public function index() {
        $data = Task::all();
        return $data;
    }
    public function show($id) {
        return Task::all($id);
    }
    public function store(Request $request){
        return Task::create($request->all());
    }
    public function update(Request $request){
        $task = Task::FindorFail($request->id);
        $task -> update($request->all());
        return $task;
    }
    public function delete(Request $request){
        $task = Task::FindorFail($request->id);
        $task -> delete();
        return $task;
    }
}
