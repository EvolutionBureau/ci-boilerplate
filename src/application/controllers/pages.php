<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Pages extends MY_Controller {

	public function index()
	{
		$data = array('deviceType' => $deviceType = ($this->detect->isMobile() ? ($this->detect->isTablet() ? 'tablet' : 'phone') : 'computer'));

		$this->load->view('templates/header', $data);
		$this->load->view('pages/home', $data);
		$this->load->view('templates/footer', $data);

	}

	public function other()
	{
		// By default this is shown at /pages/other
		$data = array();
		$this->load->view('templates/header', $data);
		$this->load->view('pages/other', $data);
		$this->load->view('templates/footer', $data);

	}
}

/* End of file pages.php */
/* Location: ./application/controllers/pages.php */