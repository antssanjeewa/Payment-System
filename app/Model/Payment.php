<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'amount',
        'station_id'
    ];

    public function station(){
        return $this->belongsTo('App\Model\Station');
    }
}
