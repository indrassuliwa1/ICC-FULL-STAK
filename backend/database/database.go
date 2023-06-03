package database

import (
	"Indra/models"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB 

func ConnetcDB(){
	if err := godotenv.Load(); err != nil {
		log.Fatal("Gagal Membuat File .env")
	}

	dsn :=os.Getenv("DSN")

	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Gagal Koneksi Database !!")
	} else {
		fmt.Println("Koneksi Database Berhasil")
	}

	DB =  database

	if err := database.AutoMigrate(&models.User{}); err != nil {
		log.Fatal("Gagal Migrasi")
	}else {
		fmt.Println("Berhasil Migrasi")
	}

}