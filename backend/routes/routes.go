package routes

import (
	"Indra/controrlers"

	"github.com/gofiber/fiber/v2"
)

func SetupRoute(app *fiber.App){
	app.Get("/reads", controrlers.Reads)
	app.Get("/read/:id", controrlers.Read)
	app.Post("/create", controrlers.Create)
	app.Put("/update/:id", controrlers.Update)
	app.Delete("/delete/:id", controrlers.Delete)

}