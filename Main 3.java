import java.util.*;
import java.util.Scanner;
import java.lang.*;
import java.lang.Math.*;
class Main {
  public static void main(String args[]){  //TODO Auto-generated method stub
          Scanner in = new Scanner(System.in);
          double a; 
          double b; 
          double c; 
          double root1;
          double discriminant; 
          double root2;

        System.out.println("Enter the a value"); 
        a = in.nextInt(); 

        System.out.println("Enter the b value"); 
        b = in.nextInt(); 

        System.out.println("Enter the c value"); 
        c = in.nextInt(); 

        discriminant = (b*b)-(4*a*c);
        discriminant = Math.sqrt(discriminant); 

        root1 = -b + discriminant; 
        root2 = -b - discriminant; 
        root1 = root1 / 2*a;
        root2 = root2 / 2*a;
        System.out.println("x = "+root1+" , or x = "+root2); 
    }
}