export class encryption {

    PassWord : {} | undefined = undefined;

    setincode(PassWord : {}) {

        this.PassWord = PassWord;

        /** 양식 : {a : %% , b : %%%, c : %%%%} -> abc -> %% %%% %%%% */

    }

    incoding(element : any) {

        console.log(this.PassWord);

    }

    recovery(element : any) {



    }

}

const a = new encryption();


a.incoding("hello");