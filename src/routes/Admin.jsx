const Admin = () =>
{
	return(
		<>
			<div className='container-fluid h-100'>
				<div className='row'>
					<div className='col-3'>
						<div className='container p-3 text-center d-flex align-items-center justify-content-center'>
							<h1 className='fs-3'>listings</h1>
						</div>
					</div>
					<div className='row'>
						<div className='col-3 '>
							<form >
								<input className=''></input>
								<input type='submit' />
							</form>
						</div>
					</div>
					<div className='row h-40'>
						<div className='col-3'>
							<ul className="list-group-flush list-group">
								<button className='list-group-item list-group-item-action text-center fs-4'>one</button>
								<button className='list-group-item list-group-item-action text-center fs-4'>two</button>
								<button className='list-group-item list-group-item-action text-center fs-4'>three</button>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
