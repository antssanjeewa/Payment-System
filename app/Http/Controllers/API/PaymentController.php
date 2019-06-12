<?php

namespace App\Http\Controllers;

use App\Model\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $payment =  Payment::all();
        return response()->json(['data'=>$payment],200);
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
                'amount' => 'required|string|max:50',
                'station_id' => 'required'
            ]);
            // move_uploaded_file($_FILES['fileField']['tmp_name'],"../inventory_images/$newname");
           Payment::create($data);
            return response()->json(["message"=>"Add Payment successfuly","responce"=>$data],201);
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
        return Payment::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $item = Payment::find($id);
            if(!$item){
                return response()->json(['message'=>"Payment Not Found.."],404);
            }
            $data = $this->validate(request(), [
                'amount' => 'required|string|max:50',
                'station_id' => 'required'
            ]);
            
            $item->update($data);
            return response()->json(["message"=>"Add Payment successfuly","responce"=>$data],201);
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
        $item = Payment::find($id);

        if(!$item){
            return response()->json(['message'=>"user Not Found.."],404);
        }
        $item->delete();
        return response()->json(['message'=>"Successfully Deleted..."],200);
    }
}

