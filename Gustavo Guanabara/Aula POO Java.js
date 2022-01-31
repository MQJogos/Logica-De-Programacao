package aula02;




public class Aula02 {
   
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor="Azul";
        c1.ponta=0.5f;
        c1.modelo= "BIC";
        c1.carga = 100; 
        c1.status();
        c1.rabiscar();
        
        Caneta c2 = new Caneta();
        c2.cor="Vermelha";
        c2.ponta=0.5f;
        c2.modelo = "FaberCastell";
        c2.carga = 50;
        c2.status();
        c2.rabiscar();
        
      
    }
    
}


public class Caneta {
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    void status() {
        System.out.print ("Uma caneta " + this.cor);
        System.out.println ("Está tampada ? " + this.tampada);
        System.out.println ("Modelo " + this.modelo);
        System.out.println("A carga está " + this.carga);
        System.out.println("Ponta: " + this.ponta);
    
    }
    
    void rabiscar(){
        if (this.tampada==true){
        System.out.println ("ERRO! Não posso rabiscar");
        }else {
         System.out.println("Estou Rabiscando ") ;  
        }
    }
    
    void tampar() {
        this.tampada=false;
    }
    
    void destampar(){
        this.tampada=true;
    }
            
            
}
--------------------------------------------------------------------------------------------------------------
package aula05;
public class Aula02 {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.setNumConta(1111);
        p1.setDono("Jubileu");
        p1.abrirConta("CC");
        
        ContaBanco p2 = new ContaBanco();
        p2.setNumConta(2222);
        p2.setDono("Creuza");
        p2.abrirConta("CP");
        
        p1.depositar(100);
        p2.depositar(500);
        p2.sacar(100);
        
        p1.sacar(150);
        p1.fecharConta();
       
        
        
        p1.estadoAtual();
        p2.estadoAtual ();
        
    }
    
}


package aula02;
public class ContaBanco {
    // Atributos
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;
    public void estadoAtual(){
        System.out.println ("-----------------------------");
        System.out.println ("Conta: " +this.getNumConta());
        System.out.println("Tipo: " + this.getTipo());
        System.out.println("Dono: " + this.getDono());
        System.out.println("Saldo: " + this.getSaldo());
        System.out.println("Status: " + this.getStatus());
    }
    
    // Metodos Personalizados
    public void abrirConta(String t){
        this.setTipo(t);
        this.setStatus(true);
        if (t == "CC"){
          this.setSaldo(50);
        }else if (t == "CP"){
          this.setSaldo (150);
        }
        System.out.println("Conta aberta com sucesso !");
    }
    public void fecharConta(){
        if (this.getSaldo()> 0 ) {
      System.out.println ("Conta não pode ser fechada porque ainda tem dinheiro");
     } else if (this.getSaldo () < 0){
      System.out.println("Conta não pode ser fechada pois tem débito");
     } else{
        this.setStatus (false);
        System.out.println ("Conta fechada com sucesso!");
     }
   }
    public void depositar(float v){
        if (this.getStatus()){
            this.setSaldo(this.getSaldo()+v);
            System.out.println("Depósito realizado com sucesso na conta de " + this.getDono());
            } else {
            System.out.println ("Impossível depositar em uma conta fechada!");    
        }
    }
    public void sacar(float v){
        if (this.getStatus()){
            if (this.getSaldo()>=v){
                this.setSaldo(this.getSaldo() - v);
                System.out.println ("Saque realizado na conta de " +this.getDono());
        } else{
             System.out.println ("Saldo insuficiente para saque");
        }
         
        }else{
           System.out.println ("Impossível sacar de uma conta fechada!");
            
        }
    }
    public void pagarMensal(){
        int v = 0;
        if (this.getTipo() == "CC"){
            v = 12;
        }else if (this.getTipo() == "CP"){
            v = 20;
        }
        if (this.getStatus()){
            this.setSaldo(this.getSaldo() - v);
            System.out.println("Mensalidade para com sucesso por " + this.getDono());
        }else{
            System.out.println("Impossível pagar com uma conta fechada!");
        }
        
    }
    // Método Construtor
    public ContaBanco(){
        this.saldo =0;
        this.status=false;
    }
    // Métodos Especiais
    public int getNumConta(){
       return numConta;
    }
    public void setNumConta(int numConta ){
        this.numConta = numConta;
    }
     public String getTipo (){
       return tipo;
    }
     public void setTipo (String tipo){
      this.tipo = tipo;
     }
    public String getDono (){
     return dono;
     }
    public void setDono (String dono){
     this.dono = dono;
    }
    public float getSaldo (){
    return saldo;
    
    }
    public void setSaldo(float saldo){
    this.saldo = saldo;
    }
    public boolean getStatus (){
    return status;
    }
    public void setStatus(boolean status){
    this.status = status;
    }

    
}
--------------------------------------------------------------------------------------------------------------
package projetopessoas;
public class Aluno extends Pessoa {
   // Atributos 
    private int matricula;
    private String curso;
    // Métodos
    public void cancelMatric(){
       System.out.println (" Matrícula será cancelada");
        
    }
     // Métodos Especiais
    public int getMatric(){
       return matricula;
    }
    public void setMatric(int matricula ){
        this.matricula = matricula;
    }
     public String getCurso (){
       return curso;
    }
     public void setCurso (String curso){
       this.curso = curso;
     } 
}


package projetopessoas;
public class Funcionario extends Pessoa {
    // Atributos 
    private String setor;
    private boolean trabalhando;
    // Métodos
    public void mudarTrabalho(){
        this.trabalhando =! this.trabalhando;
    }
     // Métodos Especiais
    public String getSetor(){
       return setor;
    }
    public void setSetor(String setor ){
        this.setor = setor;
    }
     public boolean getTrabalhando (){
       return trabalhando;
    }
     public void setTrabalhando (boolean trabalhando){
       this.trabalhando = trabalhando;
     }
    
 
}

package projetopessoas;
public class Pessoa {
    // Atributos 
    private String nome;
    private int idade;
    private String genero;
    // Métodos
    public void fazerAniv(){
        this.idade ++;
    }
     // Métodos Especiais
    public String getNome(){
       return nome;
    }
    public void setNome(String nome ){
        this.nome = nome;
    }
     public int getIdade (){
       return idade;
    }
     public void setIdade (int idade){
       this.idade = idade;
     }
    public String getGenero (){
     return genero;
     }
    public void setGenero (String genero){
     this.genero = genero;
    }
    // ????
    @Override
    public String toString() {
        return "Pessoa{" + "nome=" + nome + ", idade=" + idade + ", genero=" + genero + '}';
    }

    
   
    
}


package projetopessoas;
public class Professor extends Pessoa {
    // Atributos 
    private String especialidade;
    private float salario;
    
    // Métodos
    public void recebAument(float aum){
        this.salario += aum;
        
    }
     // Métodos Especiais
    public String getEspecialidade(){
       return especialidade;
    }
    public void setEspecialidade(String especialidade ){
        this.especialidade = especialidade;
    }
     public float getSalario (){
       return salario;
    }
     public void setSalario (float salario){
       this.salario = salario;
     }
    
}

package projetopessoas;
public class ProjetoPessoas {
    public static void main(String[] args) {
        //Programa Principal
        Pessoa p1 = new Pessoa();
        Aluno p2 = new Aluno();
        Professor p3 = new Professor();
        Funcionario p4 = new Funcionario();
        
                
        p1.setNome("Alan");
        p2.setNome("Anaís");
        p3.setNome("André");
        p4.setNome("Nicole");
        
        p1.setIdade(20);
        p2.setIdade(21);
        p3.setIdade(22);
        p4.setIdade(23);
        
        p1.setGenero("M");
        p2.setGenero("F");
        p3.setGenero("M");
        p4.setGenero("F");
        
        p2.setCurso("Informática");
        p3.setSalario(2500.75f);
        p4.setSetor("Juridico");
        
        p3.recebAument(1000f);
        p4. mudarTrabalho();
        p2. cancelMatric();
        
        
        System.out.println (p1.toString());
        System.out.println (p2.toString());
        System.out.println (p3.toString());
        System.out.println (p4.toString());
                
        
        //p3.recebAumento(1000);
       // p4. mudarTrabalho();
        //p2. cancelMatri();
    }
}

--------------------------------------------------------------------------------------------------------------

package aula09;
public class Aula09 {
     public static void main(String[] args) {
        Pessoa[] p = new Pessoa [2];
        Livro[] l = new Livro [3];       
        
    }
    
}

package aula09;
public class Livro implements Publicacao{
    private String titulo;
    private String autor;
    private int totPaginas;
    private int pagAtual;
    private boolean aberto;
    private Pessoa leitor; 
    // Métodos Públicos

    public String detalhes() {
        return "Livro{" + "titulo=" + titulo + ", autor=" 
                + autor + ", totPaginas=" + totPaginas 
                + ", pagAtual=" + pagAtual + ", aberto=" 
                + aberto + ", leitor=" + leitor + '}';
    }
    
    // Métodos Especiais

    public Livro(String ti, String au, int to,  Pessoa leitor) {
        this.titulo = ti;
        this.autor = au;
        this.totPaginas = to;
        this.aberto = false;
        this.pagAtual = 0;
        this.leitor = leitor;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String ti) {
        this.titulo = ti;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String au) {
        this.autor = au;
    }

    public int getTotPaginas() {
        return totPaginas;
    }

    public void setTotPaginas(int to) {
        this.totPaginas = to;
    }

    public int getPagAtual() {
        return pagAtual;
    }

    public void setPagAtual(int pa) {
        this.pagAtual = pa;
    }

    public boolean getAberto() {
        return aberto;
    }

    public void setAberto(boolean ab) {
        this.aberto = ab;
    }

    public Pessoa getLeitor() {
        return leitor;
    }

    public void setLeitor(Pessoa leitor) {
        this.leitor = leitor;
    }
    @Override
    public void abrir(){
        this.aberto = true;
    
    }
    @Override
    public void avancarPag(){
       this.pagAtual ++;
    }

    @Override
    public void fechar(){
        this.aberto = false;
    
    }
    @Override
    public void folhear(int p){
       this.pagAtual = p ;
       
    
    }
    @Override
    public void voltarPag(){
        this.pagAtual --;
    
    }
    
    }



--------------------------------------------------------------------------------------------------------------
