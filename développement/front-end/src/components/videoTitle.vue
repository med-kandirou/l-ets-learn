<template>
    <div @click="selected(id_video)" class="title w-full flex items-center justify-center p-4 border border-slate-200 hover:bg-red-200 cursor-pointer">
        <div class="cercle w-7 h-7 border-2 rounded-full border-red-500"></div>
        <div class="w-7 h-7 border-r-2 border-indigo-500"></div>
        <div class="flex items-center">
            <img src="/images/video.png" class="mr-3 ml-4 h-9" alt="video icon">
            <div class="taille">( {{NomVideo}} {{Taille}} )</div>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['getvideo'])
defineProps({
    id_video:Number,
    NomVideo:String,
    Taille:String,
})
function selected(id){
    let title=document.querySelectorAll('.title');
    title.forEach(t => {
        t.addEventListener('click',function(){
            let cercle=document.querySelectorAll('.cercle');
            cercle.forEach((element) => {
                element.classList.remove('bg-red-500');
            });
            t.firstChild.classList.add('bg-red-500');
        })
    });
    //emit get video to change video
    emit('getvideo',id)
}
</script>

<style scoped>
.taille{
    color: #003679;
}
</style>