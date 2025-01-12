import { Postagem } from "./models/postagem";
import { Microblog } from "./models/microblog";

//criando as postagens
let post1 = new Postagem(1, "Testando a primeira postagem", 10);
let post2 = new Postagem(2, "Agora vamos na segunda postagem", 40);
let post3 = new Postagem(3, "Discordo da sua opinião", 15);
let post4 = new Postagem(4, "Ma eu concordo com você @2", 11);

//criando um microblog
let microblog = new Microblog();
//inserindo as postagens no microblog
microblog.incluirPostagem(post1);
microblog.incluirPostagem(post2);
microblog.incluirPostagem(post3);
microblog.incluirPostagem(post4);

//testando os métodos
console.log(microblog.toString());
console.log(`Postagem mais curtida: ${microblog.postagemMaisCurtida().toString()}`);
console.log("-----------------------------------------------------");
microblog.curtirPostagem(3); //curtindo uma postagem
console.log(microblog.toString());

//excluindo uma postagem
microblog.excluirPostagem(2);
console.log(microblog.toString());

