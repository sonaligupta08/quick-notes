class practice{
    public static void main(String[] args) {
        int a = 1;
        int b = 0;

        try{
           int c = a/b;
        }
        catch(ArithmeticException e){
           
                    System.out.println(e);
        }
        try{
           String s = "hello";
        }
        catch(NullPointerException e){
            System.out.println(e);

        }
    }
}
