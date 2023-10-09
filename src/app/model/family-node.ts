
export class FamilyNode{
    name?: string;

    attachedImageLink?: string;
    description?:string; 

    child: FamilyNode[];

}


export function getFamily():FamilyNode{
    let familyNode = {
        name: "parent",
        child: []
    } as FamilyNode;

    let child1 = {
        name: "Child1",
        child: []
    } as FamilyNode;

    let child2 = {
        name: "Child2",
        child: []
    } as FamilyNode;

    familyNode.child.push(child1);
    familyNode.child.push(child2);

    let gchild1 = {
        name: "Grand Child1",
        child: []
    } as FamilyNode;

    let gchild2 = {
        name: "Grand Child2",
        child: []
    } as FamilyNode;

    child1.child.push(gchild1);
    child1.child.push(gchild2);

    let gchild3 = {
        name: "Grand Child3",
        child: []
    } as FamilyNode;

    let gchild4 = {
        name: "Grand Child4",
        child: []
    } as FamilyNode;
    
    child2.child.push(gchild3);
    child2.child.push(gchild4);

    
    return familyNode;
} 


export function getMyFamily():FamilyNode{
    let familyNode = {
        name: "Hazrat Ali Ibn Abu Talib (R.A)",
        child: []
    } as FamilyNode;

    let child1 = {
        name: "Hazrat Imam Hasan Ibn Ali (R.A)",
        child: []
    } as FamilyNode;

    familyNode.child.push(child1);

    let grandchild1 = {
        name: "Syed Hasan Al Masna",
        child: []
    } as FamilyNode;

    
    child1.child.push(grandchild1);

    let ggchild1 = {
        name: "Syed Abdullah Al Mahaj",
        child: []
    } as FamilyNode;

    grandchild1.child.push(ggchild1);

    let g1ggchild = {
        name: "Syed Musa Al Jaown",
        child: []
    } as FamilyNode;

    ggchild1.child.push(g1ggchild);

    
    let g2ggchild = {
        name: "Syed Abdullah Saani",
        child: []
    } as FamilyNode;

    g1ggchild.child.push(g2ggchild);

    let g3ggchild = {
        name: "Syed Musa Saani",
        child: []
    } as FamilyNode;

    g2ggchild.child.push(g3ggchild);

    let g4ggchild = {
        name: "Syed Dawood",
        child: []
    } as FamilyNode;

    g3ggchild.child.push(g4ggchild);

    let g5ggchild = {
        name: "Syed Muhammad",
        child: []
    } as FamilyNode;

    g4ggchild.child.push(g5ggchild);

    let g6ggchild = {
        name: "Syed Yahya Al Zahid",
        child: []
    } as FamilyNode;

    g5ggchild.child.push(g6ggchild);

    let g7ggchild = {
        name: "Syed Abi Abdullah",
        child: []
    } as FamilyNode;

    g6ggchild.child.push(g7ggchild);

    let g8ggchild = {
        name: "Syed Abu Saleh Musa Jangi",
        child: []
    } as FamilyNode;

    g7ggchild.child.push(g8ggchild);

    let g9ggchild = {
        name: "Syed Abdul Qadir Zilani",
        child: []
    } as FamilyNode;

    g8ggchild.child.push(g9ggchild);

    let g10ggchild = {
        name: "Syed Azallah Shah",
        child: []
    } as FamilyNode;

    g9ggchild.child.push(g10ggchild);

    let g11ggchild = {
        name: "Syed Hafiz Ahmed Tannuri (Shah Miraan)",
        child: []
    } as FamilyNode;

    g10ggchild.child.push(g11ggchild);

    let g11ggchild1 = {
        name: "Syed Abdul Quddus (Shah Makhdum)",
        child: []
    } as FamilyNode;

    g10ggchild.child.push(g11ggchild1);

    let g11ggchild2 = {
        name: "Syed Shah Munir",
        child: []
    } as FamilyNode;

    g10ggchild.child.push(g11ggchild2);

    let g11ggchild3 = {
        name: "Syeda Saleha Mozzuma",
        child: []
    } as FamilyNode;

    g10ggchild.child.push(g11ggchild3);

    // ########################################### 1st Gen After Hazrat Shah Miran

    let g12ggchild1 = {
        name: "Syed Shah Amanullah",
        child: []
    } as FamilyNode;

    g11ggchild.child.push(g12ggchild1);

    let g12ggchild2 = {
        name: "Syed Shah Faizullah",
        child: []
    } as FamilyNode;

    g11ggchild.child.push(g12ggchild2);

    // ########################################### 2nd Gen After Hazrat Shah Miran (Not Really) 1st Gen of Know Kanchanpur

    let kg1child = {
        name: "Khondoker Syed Jaan Mohammad",
        child: []
    } as FamilyNode;

    g12ggchild1.child.push(kg1child);


    // ########################################### 3rd Gen After Hazrat Shah Miran (Not Really) 1st Gen of Know Kanchanpur

    let kg2child = {
        name: "Syed Golam Haider",
        child: []
    } as FamilyNode;

    kg1child.child.push(kg2child);

    // ########################################### 4th Gen After Hazrat Shah Miran (Not Really) 1st Gen of Know Kanchanpur


    let kg3chil1 = {
        name: "Syed Golam Ibrahim",
        description:"(Married to Fela bibi D/O Aliar Gazi Chowdhury of Makrabpur,Nangalkot , Comilla)",
        child: []
    } as FamilyNode;

    kg2child.child.push(kg3chil1);

    let kg3chil2 = {
        name: "Syed Golam Ismail",
        description:"(Died as Bachelor)",
        child: []
    } as FamilyNode;

    kg2child.child.push(kg3chil2);

    // ########################################### 5th Gen After Hazrat Shah Miran (Not Really) 1st Gen of Know Kanchanpur

    let kg4chil1 = {
        name: "Syed Golam Israil Chowdhury",
        description:"(Married to Syeda Karimunnesa Chowdhurani G.D/O Syed Rawshon Ali, D/O Hazera Khatoon of Andhikot, Muradnagar, Comilla)",
        child: []
    } as FamilyNode;

    kg3chil1.child.push(kg4chil1);

    let kg4chil2 = {
        name: "Syeda Rahimunnesa Chowdhurani",
        description:"(Married to Syed Hasan Ali Chowdhury, Zamindar of Kanchanpur.)",
        child: []
    } as FamilyNode;

    kg3chil1.child.push(kg4chil2);

    let kg4chil3 = {
        name: "2 daughters name could not recovered.",
        description:"(One daughter married in Panchgaon, Noakhali.)",
        child: []
    } as FamilyNode;

    kg3chil1.child.push(kg4chil3);

    // ########################################### 6th Gen After Hazrat Shah Miran (Not Really) 1st Gen of Know Kanchanpur

    let kg5chil1 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg4chil1.child.push(kg5chil1);

    let kg5chil2 = {
        name: "Syed Abdul Majid Chowdhury",
        description:"(Married to Fatema Khatun D/O Maolana Ashraf Uddin of Comilla Daroga Bari)",
        child: []
    } as FamilyNode;

    kg4chil1.child.push(kg5chil2);

    let kg5chil3 = {
        name: "Syed Mohammad Chowdhury",
        description:"(Married to Anjumennesa chowdhurani D/O Yakub Ali Chowdhury of Raipur Chowdhury Bari, & Syeda Asia Khatun D/O Syed Abdul Bari of Rupsha & Syeda Sanjida Khatun D/O Syed Abdul Bari of Shahpur.)",
        child: []
    } as FamilyNode;

    kg4chil1.child.push(kg5chil3);

    let kg5chil4 = {
        name: "Syeda Nurunnesa Chowdhurani",
        description:"(Married to Syed Sarwar Alam Chowdhury S/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg4chil1.child.push(kg5chil4);

    // ########################################### 7th Gen After Hazrat Shah Miran (Not Really) 1st Gen of Know Kanchanpur

    // kg5chil1 branch
    

    // kg5chil2 branch
    // kg5chil3 branch
    // kg5chil4 branch
    abdurGafurChowdhury(kg5chil1);

    
    return familyNode;
} 

function abdurGafurChowdhury(kg5chil1:FamilyNode){

    let kg6chil1 = {
        name: "Syed Abdun Nur Chowdhury",
        description:"(Married to Nasima Khatun Khairunnesa Chowdhurani D/O Ahmed Sobhan Chowdhury of Paragalpur, Mireshawrai, Chittagong)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil1);

    let kg6chil2 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil2);

    let kg6chil3 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil3);

    let kg6chil4 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil4);

    let kg6chil5 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil5);

    let kg6chil6 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil6);

    let kg6chil7 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil7);

    let kg6chil8 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil8);

    let kg6chil9 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil9);

    let kg6chil10 = {
        name: "Syed Abdul Gafur Chowdhury",
        description:"(Married to Syeda Badarennesa Chowdhurani D/O Syed Badshah Alam Chowdhury of Tangirpar, Noakhali)",
        child: []
    } as FamilyNode;

    kg5chil1.child.push(kg6chil10);

}

