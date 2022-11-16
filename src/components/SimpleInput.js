import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const [nameIsValid, setIsValid] = useState(true);
  const nameInputRef = useRef();
  const [, setName] = useState("");
  const [isTouched, setIsTouched] = useState(true);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // setIsValid(true);


    // nameInputRef.current.value = "";
  };
  const onBlurHandler = () => {
    const enteredName = nameInputRef.current.value;
    setIsValid(true);
    setIsTouched(true);
    if (enteredName.trim().length < 5) {  
      setIsValid(false);
      setIsTouched(false)


      
      return;
    }
  };

  const onChangeHandler = (e) => {
    setIsValid(true);
    setIsTouched(false);
    setName(e.target.value);

    const enteredName = nameInputRef.current.value;
    if (enteredName.trim().length < 5) {
      setIsValid(false);
      setIsTouched(false);
      return;
    }
  };
  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {!nameIsValid && (
          <p className='error-text'>input shouldn't be shorter 4 letters</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
