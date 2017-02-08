<?php
class Home extends CI_Controller{

	function __construct(){
        parent::__construct();     
    }

	public function list_Catelog(){
		$data = array();
		$this->load->model('home_model');
		$data = $this->home_model->get_listcatelog();
		$data = json_encode($data);
		echo $data;
	}

	public function list_City(){
		$data =  array();
		$this->load->model('home_model');
		$data = $this->home_model->get_listcity();
		$data = json_encode($data);
		echo $data;
	}

	// public function list_PostSell(){
	// 	$data = array();
	// 	$this->load->model('home_model');
	// 	$data = $this->home_model->get_listpostsell();
	// 	$data = json_encode($data);
	// 	echo $data;
	// }
}