import React from 'react';
import styled from 'styled-components';

const TooltipNew = ({title,value,icon,style}) => {
  return (
    <StyledWrapper>
      <div className="item-hints">
        <div className="hint" data-position={4}>
          <span className="hint-radius" />
          
          {/* <span className="hint-dot"><img src={img} alt="" /></span> */}
          <span className='mt-32 -ml-20'>{title}</span>
          <div className="hint-content do--split-children">
            <p>{value}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .item-hints {
    --purple: #720c8f;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    padding-right: 170px;
  }
  .item-hints .hint {
    margin: 150px auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-hints .hint-dot {
    z-index: 5;
   
    border-radius: 50%;
    width: 100px;
    height: 100px;
    -webkit-transform: translate(-0%, -0%) scale(0.95);
    transform: translate(-0%, -0%) scale(0.95);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    
  }
  .item-hints .hint-radius {
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -125px 0 0 -125px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  .item-hints .hint[data-position="1"] .hint-content {
    top: 85px;
    left: 50%;
    margin-left: 56px;
  }
  .item-hints .hint-content {
    width: 300px;
    position: absolute;
    z-index: 5;
    padding: 35px 0;
    opacity: 0;
    transition: opacity 0.7s ease, visibility 0.7s ease;
    color: black;
    visibility: hidden;
    pointer-events: none;
  }
  .item-hints .hint:hover .hint-content {
    position: absolute;
    z-index: 5;
    padding: 35px 0;
    opacity: 1;
    -webkit-transition: opacity 0.7s ease, visibility 0.7s ease;
    transition: opacity 0.7s ease, visibility 0.7s ease;
    color: black;
    visibility: visible;
    pointer-events: none;
  }
  .item-hints .hint-content::before {
    width: 0px;
    bottom: 29px;
    left: 0;
    content: "";
    background-color: black;
    height: 1px;
    position: absolute;
    transition: width 0.4s;
  }
  .item-hints .hint:hover .hint-content::before {
    width: 180px;
    transition: width 0.4s;
  }
  .item-hints .hint-content::after {
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform: rotate(-225deg);
    transform: rotate(-225deg);
    bottom: 29px;
    left: 0;
    width: 80px;
    content: "";
    background-color:black;
    height: 1px;
    position: absolute;
    opacity: 1;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  .item-hints .hint:hover .hint-content::after {
    opacity: 1;
    visibility: visible;
  }
  .item-hints .hint[data-position="4"] .hint-content {
    bottom: 85px;
    left: 50%;
    margin-left: 56px;
  }`;

export default TooltipNew;
