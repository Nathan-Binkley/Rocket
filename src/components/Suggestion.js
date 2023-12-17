import './index.css';

function Suggestion(props) {
    return (
    <>
        <div className='col-lg-4 col-md-4 col-sm-12 text-center pb-3'>
            <img src={props.img} alt='consi' className='img-fluid rounded'></img>
            <p className='p-5 lead'>{props.txt}</p>
            <button className='btn btn-primary'>Learn More</button>
        </div>  
    </>
    );
  }
  
  export default Suggestion;