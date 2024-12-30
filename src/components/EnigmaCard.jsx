import React from 'react'
import Speaker from '../assets/images/speaker.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const EnigmaCard = () => {
    useGSAP(()=>{
        const showupTimeline = gsap.timeline({
            defaults:{
                duration : 1
            }
        });
        showupTimeline.from('#EnigmaCard', {
            duration: 0.5,
            opacity: 0,
            scale:0,
            ease: 'power2.out'
        })
        showupTimeline.from('#EnigmaCard', {
            width : 0 ,
            ease: 'power2.out'
        },'<0.5')
        showupTimeline.from('#EnigmaTitle', {
            x: -100,
            opacity: 0,
            ease: 'back.out',
        })
        showupTimeline.from('#EnigmaDescription', {
            y: 400,
            opacity: 0,
            ease: 'linear',
            scale : 4 ,
        },'<')
        showupTimeline.from('#ThreeJS', {
            rotate: 360,
            opacity: 0,
            ease: 'expoScale',
            scale : 0 ,
        },'<')
        showupTimeline.from('#JoinNow', {
            height:0,
            ease: 'expoScale',
            x:200,
            y:200,
            scale : 0 ,
        },'<')
        showupTimeline.from('#Speaker', {
            scale:0,
            rotateY: 360,
        },'<')
        showupTimeline.from('#JoinNowText', {
            opacity: 0,
        },'<1')
        const button = document.querySelector('#JoinNow');
        button.addEventListener('click' , () => {
            showupTimeline.timeScale(2); // will triple the speed
            showupTimeline.reverse(); // will reverse the thing
        })

        gsap.to("#JoinNowText",{
            opacity:0,
            delay : 4,
            duration : 1,
            repeat:-1,
            ease :'linear',
            yoyo :true ,
        })
    })
    return (
        <>
        <section >
          <div id="EnigmaCard" className='m-3 p-5 pt-8 flex flex-1 border-white border flex-col'>
            <div className='flex flex-row items-center justify-between flex-1'>
            <div className='flex flex-1 times-center gap-5 justify-between flex-col max-w-3xl'>
              <p id="EnigmaTitle" className="text-9xl font-calcio text-white responsive-text
              ">E<span id="Nturner">N</span>IGMA</p>
              <p div id="EnigmaDescription" className='font-mondwest text-2xl pt-2'>
                Join enigma for getting hands on experience on linux and for exciting
                CTF tournament!
                Compete with other teams and get exciting prizes!!
              </p>
             </div>
              <div id="ThreeJS" className='h-64 w-80 bg-gray-600'> ThreeJS component section </div>
              </div>
              <div className='flex flex-row items-center justify-between flex-1 pt-1'>
              <img id="Speaker" src={`${Speaker}`} className='w-20 h-20' />
              <div id="JoinNow" className='bg-enigma-green text-3xl p-3 text-black cursor-pointer'>
               <p id="JoinNowText">Join Now </p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
    // cahnge the ot the speaker icon
}

export default EnigmaCard
