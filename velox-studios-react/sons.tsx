import { useState, useEffect } from 'react';
import { CreatorBtn, HandleLinkBtn } from './src/utils/buttons';

export default function MainSons() {
    const [wdtImg, setWdtImg] = useState(300);
    const [click, setClick] = useState(false);
    const [duration, setDuration] = useState<number | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);

    useEffect(() => {
        const ResposiveImg = () => {
            if (window.innerWidth < 501) setWdtImg(198);
            else setWdtImg(300)
        }

        const audioVX = document.getElementById('audio-vx') as HTMLAudioElement;

        const LoadMetaData = () => {
            setDuration(audioVX.duration);
        }

        const TimeUpdate = () => {
            setCurrentTime(audioVX.currentTime);
        }

        window.addEventListener('resize', ResposiveImg);
        audioVX?.addEventListener('loadedmetadata', LoadMetaData);
        audioVX?.addEventListener('timeupdate', TimeUpdate);
        
        return () => {
            window.removeEventListener('resize', ResposiveImg);
            audioVX?.removeEventListener('loadedmetadata', LoadMetaData);
            audioVX?.removeEventListener('timeupdate', TimeUpdate);
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

    const iconCL: string = click ? 'ri-pause-fill text-3xl text-white bg-black p-3 rounded-[100%] hover:cursor-pointer' : 'ri-play-fill text-3xl text-white bg-black p-3 rounded-[100%] hover:cursor-pointer'
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <main className='w-[100%]'>
            <img src="https://i.postimg.cc/85mSnBmf/restaurado-vx.png" alt="Restaurado VX" className="block m-auto mt-4 mb-4 rounded-[100%]" width={wdtImg} />
            <audio id='audio-vx' src="./OficialVx.m4a" />
            <div className='flex justify-center items-center gap-4 mt-4 mb-4'>
                <i className={iconCL} onClick={toogleAudio} />
                {duration !== null && (
                <p className='text-center text-white'>
                    {formatTime(currentTime)} / {formatTime(duration)}
                </p>
            )}
            </div>
            <p className='m-auto w-[65%] text-white font-alan'>
                Um som ecua dentro do reinado das Sombras, aonde esse som não e Visto como Algo Normal, não reconhecido como algo <span className='font-mono'>familiar..</span> mais sim conhecido como uma lenda nas eras <span className='font-mono'>antigas..</span> Mais antigas do que a era da criação, um som que poucos irão <span className='font-mono'>Reconhecer..</span>
            </p>
            <br />
            <h1 className='text-center text-white text-xl font-ubuntu'>Chamada dos Guardiões</h1>
            <audio id='guardians-audio-vx' src="./guardiansVX.wav" />
            {CreatorBtn('Voltar', 'block m-auto w-[135px] mt-4 bg-violet-600 p-3 text-white rounded-lg duration-300 hover:bg-violet-700 hover:cursor-pointer', HandleLinkBtn)}
        </main>
    );

}