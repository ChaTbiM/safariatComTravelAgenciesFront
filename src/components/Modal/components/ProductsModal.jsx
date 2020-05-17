import React from "react";
import styled from "styled-components";

export default function ProductsModal(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  .modal-main {
    margin: 0 auto;
    background-color: white;
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80vh;
    overflow: auto;
    margin-top: 2rem;
  }

  
  .header {
    display: flex;
    max-width: 50%;
    justify-content: space-between;
    align-items: center;
  }

  .header__back {
    cursour: pointer;
    font-size: 2rem;
    color: white;
    padding: 0 1rem;
    background-color: #2c2c2c;
    
  }

  .header__tittle {
  }

  // Top -----------------------------------------------------------------------------
  .top {
      display:flex;
      justify-content:center;
      align-items:center;
      width:85%;
      margin:0 auto;
  }
  // text -------------
  .details__text {
      flex-basis:30rem;
      margin-right:2rem;
  }

  .details__buttons{
      width:100%;
      text-align:center;
  }


  .edit {
      color:#fff;
      background-color:#FFCC4E
  }

  .delete { 
      margin-left:1rem;
      background-color:#7B7B7B;
      color:#fff;
  }

  .edit , .delete {
      padding:.25rem 1rem; 
      // border: solid 1px #707070;
      border-radius:4px;
  }

  .details__info{
    background-color:#F6F6F6;
    margin-top:15px;
  }

  .details__info__row {
    width:100%;

  }
  .details__info__col {
    display:inline-block;
    width:50%;
    padding:.5rem 1rem;
    text-align:left;
    vertical-align:top;
  }

  .subText {
      color:#3E3E3E
  }

  // images -----------

  .details__images {
      align-self:flex-end;
      flex-basis:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
   
  }

  .tourMainImage{
    max-width:24.5rem;
  }

  .details__images__small{
      display:flex; 
      justify-content:center;
      align-items;center;
      margin-top:1rem;
  }

  .smallImage{
    max-width:5.7rem;
  }

  .productImage{
    max-width:18.5rem;
  }

  
  // Bottom -----------------------------------------------------------------------------

  .bottom {
      margin: 5rem ;
      display:flex;
      flex-direction:column;
      
  }

  
  .bottom__package{
    display:flex;
    justify-content:space-between;
  }

  .bottom__package__includes {
    flex-basis:27rem;
    border: solid 1px #f5f5f5;
    border-radius: 4px;
  }

  .bottom__package__includes__title {
    text-align: center;
      background-color: #f5f5f5;
      padding: 0.5rem 0;
      margin-bottom: 0.5rem;
  }

  .bottom__package__includes__text {
    margin-left:2rem;
  }

.bottom__package__excludes {
    flex-basis:27rem;
    border: solid 1px #f5f5f5;
    border-radius: 4px;
}

.bottom__package__excludes__title {
  text-align: center;
  background-color: #f5f5f5;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
}

.bottom__package__excludes__text {
    margin-left:2rem;
    
}

// Bottom Extra

.bottom__extra {
    padding:1.5rem 0;
    
}

.bottom__itinerary {
    text-align:center
}

.bottom__itinerary {
    margin-top:1rem;
    border:solid 1px #f5f5f5;
    border-radius:4px;
    margin-top:2rem;
}

.bottom__itinerary__title {
  margin:0 auto;
    text-align: center;
    background-color: #f5f5f5;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
}


.bottom__itinerary__text {
    text-align:justify;
    margin: 0 8rem;
    
    margin-top:1rem;
    margin-bottom:1rem;

}

.bottom__accomedation{
    border:solid 1px #f5f5f5;
    border-radius:4px;
    text-align:center;
    margin-top:2rem;

}

.bottom__accomedation__title{
    margin:0 auto;
    text-align: center;
    background-color: #f5f5f5;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
}

.bottom__accomedation__text{
    text-align:left;
    padding: 0 4rem;
    margin-top:1rem;
    margin-bottom:1rem;

}

  .checked{
    color:green;
    margin-right:.5rem;
  }

  .unchecked {
    color:red;
    margin-right:.5rem;

  }

`;
