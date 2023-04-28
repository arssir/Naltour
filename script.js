const birds = 
[["Flamingos", "The greater and lesser flamingos are two species of flamingos that can be spotted at Nalsarovar. These birds are known for their distinctive pink color, long legs, and curved bills. Flamingos are social birds and can often be seen in large flocks. They feed on small crustaceans, algae, and other aquatic organisms."],

["Pelicans", "The spot-billed pelican is a species of pelican that can be found at Nalsarovar. These large birds have a distinctive bill with a colorful spot on the upper mandible. They are known for their large throat pouch, which they use to catch fish while swimming. Pelicans are social birds and can often be seen in groups of five to ten individuals."],

["Storks", "The painted stork is a species of stork that can be found at Nalsarovar. These birds have a striking appearance with their bright pink and black plumage and long, thin legs. They feed on small fish, frogs, and other aquatic animals. Painted storks are known for their communal nesting habits, and they often build large nests in colonies."],

["Egrets", "The little egret and the great egret are two species of egrets that can be found at Nalsarovar. These birds have long, slender necks and legs and are known for their pure white plumage. Egrets feed on small fish, frogs, and other aquatic animals, and they often hunt by standing still and waiting for their prey to come within reach."],

["Cranes", "The sarus crane is a species of crane that can be found at Nalsarovar. These large birds have a distinctive red head and a long, thin neck. They are known for their loud, trumpeting calls and their elaborate courtship dances. Sarus cranes feed on insects, small mammals, and other small animals."],

["Herons", "The grey heron and the purple heron are two species of herons that can be found at Nalsarovar. These birds have long, thin legs and necks and are known for their patient hunting behavior. Herons feed on small fish, frogs, and other aquatic animals, and they often stand still for long periods of time while waiting for their prey to come within reach."],

["Spoonbills", "The Eurasian spoonbill is a species of spoonbill that can be found at Nalsarovar. These birds have a distinctive bill that is shaped like a spoon and is used to scoop up small fish and other aquatic animals. Spoonbills are social birds and can often be seen in groups."],

["Cormorants", "The Indian cormorant and the little cormorant are two species of cormorants that can be found at Nalsarovar. These birds have dark plumage and are known for their excellent diving ability. Cormorants feed on small fish and other aquatic animals and can often be seen diving beneath the surface of the water to catch their prey."],

["Plovers", "The Kentish plover is a species of plover that can be found at Nalsarovar. These small birds have sandy brown plumage and are known for their distinctive calls. Plovers feed on small insects and other small animals that they find along the shores of the lake."],

["Raptors", "The white-bellied sea eagle and the Indian vulture are two species of raptors that can be found at Nalsarovar. These birds are known for their excellent eyesight and hunting abilities. Eagles and vultures feed on small mammals, fish, and other animals and can often be seen soaring"]
]

const scrollableElement = document.getElementById("birds")
        const scrollButton = document.getElementById("next");
        function next(){
            scrollableElement.scrollLeft += scrollableElement.offsetWidth / 4;
        }
        function prev(){
            scrollableElement.scrollLeft -= scrollableElement.offsetWidth / 4;
        }

const birdTitle = document.getElementById("bird-name")
const birdDetails = document.getElementById("bird-info")
const birdImage = document.getElementById("bird-picture")
const popupInfo = document.getElementById("popup-info")
const cover = document.getElementById("cover")

for(let i = 0; i<birds.length; i++){
    let x = document.createElement("img")
    x.setAttribute("src",("Images/Birds/"+birds[i][0]+".jpg"))

    x.onclick = ()=>{
        birdTitle.innerHTML = birds[i][0]
        birdDetails.innerHTML = birds[i][1]
        birdImage.setAttribute("src",("Images/Birds/"+birds[i][0]+".jpg"))
        popupInfo.setAttribute("style","display : flex;");
        cover.setAttribute("style","display : block;");

    }

    scrollableElement.appendChild(x)
}

cover.onclick = () =>{
    popupInfo.setAttribute("style","display : none;");
    cover.setAttribute("style","display : none;");
}



