<?php

namespace App\Http\Controllers;

use App\Model\Station;
use Illuminate\Http\Request;

class StationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Station =  Station::all();
        return response()->json(['data'=>$Station],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $data = $this->validate(request(), [
                'name' => 'required|string|max:50',
                'address' => 'required'
            ]);
            
           Station::create($data);
            return response()->json(["message"=>"Add Station successfuly","responce"=>$data],201);
        }catch(Exception $e){
            return response()->json(["message"=>"Somthing want to wrong on the server."],  $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Station::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try{
            $item = Station::find($request->id);
            if(!$item){
                return response()->json(['message'=>"Station Not Found.."],404);
            }
            $data = $this->validate(request(), [
                'name' => 'required|string|max:50',
                'address' => 'required'
            ]);
            
            $item->update($data);
            return response()->json(["message"=>"Add Station successfuly","responce"=>$data],201);
        }catch(Exception $e){
            return response()->json(["message"=>"Somthing want to wrong on the server."],  $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Station::find($id);

        if(!$item){
            return response()->json(['message'=>"user Not Found.."],404);
        }
        $item->delete();
        return response()->json(['message'=>"Successfully Deleted..."],200);
    }
}

