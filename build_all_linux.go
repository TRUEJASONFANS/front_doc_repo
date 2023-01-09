package main

import (
	"fmt"
	"log"
	"os/exec"
)

func BuildApp(cmdStr string, ch chan int, number int) {

	cmd := exec.Command("sh","-c", cmdStr)
	out, err := cmd.Output()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(out))
	ch <-  number
}

func main() {
	chs := make(chan int)

	cmd1 := "yarn"
	go BuildApp(cmd1, chs, 1)
	fmt.Println(<-chs)

	cmd2 := "yarn build"
	go BuildApp(cmd2, chs, 2)
	fmt.Println(<-chs)

	cmd3 := "cd devii && yarn"
	go BuildApp(cmd3, chs, 3)
	fmt.Println(<-chs)

	cmd4 := "cd devii && yarn export"
	go BuildApp(cmd4, chs, 4)
	fmt.Println(<-chs)

}
