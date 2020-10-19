package main

import (
	"fmt"
	"log"
	"os/exec"
)

func BuildApp(cmdStr string, ch chan int, number int) {

	cmd := exec.Command("cmd", "/C", cmdStr)
	out, err := cmd.Output()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(out))
	ch <-  number
}

func main() {
	chs := make(chan int)
	cmd := "yarn build"
	go BuildApp(cmd, chs, 1)

	fmt.Println(<-chs)

	cmd2 := "cd blog_zhxie && yarn build"
	go BuildApp(cmd2, chs, 2)

	fmt.Println(<-chs)

}
