"use strict";

$(function () {
    var $listPersonal = $("#listPersonal"),
        $modalPersonal = $("#modal-personal");

    $listPersonal.DataTable({
        ajax: "./json/personal.json",
        columns: [{ data: "rut", title: "Rut" }, { data: "nombres", title: "Nombres" }, { data: "apellidos", title: "Apellidos" }, { data: "cargo", title: "Cargo" }, { data: "division", title: "División" }, { data: "fechaIngreso", title: "F. Ingreso" }, {
            data: null,
            defaultContent: "<button type='button' class='btn btn-xs btn-danger' data-toggle='tooltip' title='delete'><i class='fas fa-trash'></i></button>",
            "orderable": false,
            "searchable": false,
            "width": "26px"
        }]
    }).on("click", "tbody tr td:not(:has(button))", function () {
        $modalPersonal.modal("show");
    });
});