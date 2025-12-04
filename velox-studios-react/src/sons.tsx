import { useState, useEffect } from 'react';
import { CreatorBtn, HandleLinkBtn } from './utils/Functions';
import type { Props } from './utils/Props';
import 'animate.css';

export default function MainSons() {
    const [wdtImg, setWdtImg] = useState<number>(300);
    const [click, setClick] = useState<boolean>(false);
    const [click2, setClick2] = useState<boolean>(false);
    const [duration, setDuration] = useState<number | null>(null);
    const [duration2, setDuration2] = useState<number | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentTime2, setCurrentTime2] = useState<number>(0);

    useEffect(() => {
        const ResposiveImg = () => {
            if (window.innerWidth < 501) setWdtImg(198);
            else setWdtImg(300);
        }

        const audioVX = document.getElementById('audio-vx') as HTMLAudioElement;
        const audioVX2 = document.getElementById('guardians-audio-vx') as HTMLAudioElement;

        const LoadMetaData = () => {
            setDuration(audioVX.duration);
        }
        const LoadMetaData2 = () => {
            setDuration2(audioVX2.duration);
        }

        const TimeUpdate = () => {
            setCurrentTime(audioVX.currentTime);
        }
        const TimeUpdate2 = () => {
            setCurrentTime2(audioVX2.currentTime);
        }

        const HandleEnded = () => {
            setClick(false);
            setCurrentTime(0);
        }
        const HandleEnded2 = () => {
            setClick2(false);
            setCurrentTime2(0);
        }

        window.addEventListener('resize', ResposiveImg);
        audioVX?.addEventListener('loadedmetadata', LoadMetaData);
        audioVX2?.addEventListener('loadedmetadata', LoadMetaData2);
        audioVX?.addEventListener('timeupdate', TimeUpdate);
        audioVX2?.addEventListener('timeupdate', TimeUpdate2);
        audioVX?.addEventListener('ended', HandleEnded);
        audioVX2?.addEventListener('ended', HandleEnded2);
        
        return () => {
            window.removeEventListener('resize', ResposiveImg);
            audioVX?.removeEventListener('loadedmetadata', LoadMetaData);
            audioVX2?.removeEventListener('loadedmetadata', LoadMetaData2);
            audioVX?.removeEventListener('timeupdate', TimeUpdate);
            audioVX2?.removeEventListener('timeupdate', TimeUpdate2);
            audioVX?.removeEventListener('ended', HandleEnded);
            audioVX2?.removeEventListener('ended', HandleEnded2);
        }
    }, []);

    const toogleAudio = () => {
        const audioVX = document.getElementById('audio-vx') as HTMLAudioElement;
        setClick(!click);
        if (click === true) {
            audioVX?.pause();
        } else {
            audioVX?.play();
        }
    }

    const toogleAudio2 = () => {
        const audioVX2 = document.getElementById('guardians-audio-vx') as HTMLAudioElement;
        setClick2(!click2);
        if (click2 === true) {
            audioVX2?.pause();
        } else {
            audioVX2?.play();
        }
    }

    const iconCL: string = click ? 'ri-pause-fill text-3xl text-white bg-black p-3 rounded-[100%] hover:cursor-pointer' : 'ri-play-fill text-3xl text-white bg-black p-3 rounded-[100%] hover:cursor-pointer'
    const iconCL2: string = click2 ? 'ri-pause-fill text-3xl text-white bg-black p-3 rounded-[100%] hover:cursor-pointer' : 'ri-play-fill text-3xl text-white bg-black p-3 rounded-[100%] hover:cursor-pointer'
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const Sounds: string[] = ['/assets/OficialVx.m4a', '/assets/guardiansVX.wav', '/assets/guardiansVX.mp3'];
    const Images: string[] = ['/assets/restaurado-vx.png'];

    const ParaghapeSounds = (props: Props) => {
        return <p className='text-center text-white font-robot-mono bg-black p-3 rounded-full w-[150px] text-nowrap'>{props.children}</p>
    }

    return (
        <main className='w-[100%]'>
            <h1 className='text-center text-white text-xl my-4 font-ubuntu'>
                Despertar do Dragão
            </h1>
            <img src={Images[Images.length - Images.length]} alt="Restaurado VX" className="block mx-auto my-5 rounded-[100%]" width={wdtImg} />
            <audio id='audio-vx' src={Sounds[Sounds.length - Sounds.length]} />
            <div className='flex justify-center items-center gap-4 my-4'>
                <i className={iconCL} onClick={toogleAudio} />
                {duration !== null && (
                    <ParaghapeSounds>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </ParaghapeSounds>
                )}
            </div>
            <p className='mx-auto w-[65%] text-white font-alan'>
                Um som ecua dentro do reinado das Sombras, aonde esse som não e Visto como Algo Normal, não reconhecido como algo <span className='font-mono'>familiar..</span> mais sim conhecido como uma lenda nas eras <span className='font-mono'>antigas..</span> Mais antigas do que a era da criação, um som que poucos irão <span className='font-mono'>Reconhecer..</span>
            </p>
            <br />
            <h1 className='text-center text-white text-xl mb-4 font-ubuntu'>
                Chamada dos Guardiões
            </h1>
            <audio id='guardians-audio-vx'>
                <source src={Sounds[Sounds.length - Sounds.length + 1]} type="audio/wav" />
                <source src={Sounds[Sounds.length - Sounds.length + 2]} type="audio/mp3" />
            </audio>
            <div className='flex justify-center items-center gap-4 my-4'>
                <i className={iconCL2} onClick={toogleAudio2} />
                {duration2 !== null && (
                    <ParaghapeSounds>
                        {formatTime(currentTime2)} / {formatTime(duration2)}
                    </ParaghapeSounds>
                )}
            </div>
            {CreatorBtn('Voltar', 'block mx-auto w-[135px] mt-5 bg-violet-600 p-3 text-white rounded-lg duration-300 hover:bg-violet-700 hover:cursor-pointer', HandleLinkBtn('/jogos.html'))}
        </main>
    );

}