import dompol38fix from '../../assets/img/dompol38fix.png'; 

const CreatedBy = () => {
  return (
    <>
      <div className="flex">
        <img 
          src={dompol38fix} 
          alt="Created by" 
          className="parallax-img object-cover w-full h-full"
        />
      </div>
    </>
  );
}

export default CreatedBy;
