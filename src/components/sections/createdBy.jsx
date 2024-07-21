import dompol38fix from '../../assets/img/dompol38fix.png'; 

const CreatedBy = () => {
  return (
    <>
      <div className="flex justify-center">
        <img 
          src={dompol38fix} 
          alt="Created by" 
          className="parallax-img object-cover w-[900px] h-84"
        />
      </div>
    </>
  );
}

export default CreatedBy;
