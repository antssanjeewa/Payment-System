<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Station extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'name',
        'address'
    ];

    public function payment(){
        return $this->hasMany('App\Model\Payment');
    }
}
