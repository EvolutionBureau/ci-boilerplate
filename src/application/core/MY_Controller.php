<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MY_Controller extends CI_Controller
{
	public $detect;

    public function __construct()
    {
    	$this->detect = new Mobile_Detect;
        parent::__construct();
    }
    
    // Put custom stuff here
} 
