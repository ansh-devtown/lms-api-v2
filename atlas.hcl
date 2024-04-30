data "external_schema" "sequelize" {
    program = [
        "npx",
        "@ariga/ts-atlas-provider-sequelize",
        "load",
        "--path", "./src/models",
        "--dialect", "postgres",
    ]
}

env "sequelize" {
    src = data.external_schema.sequelize.url
    dev = "postgres://postgres:aimbot@localhost:5432/devtown"
    migration {
        dir = "file://src/migrations"
    }
    format {
        migrate {
            diff = "{{ sql . \"  \" }}"
        }
    }
}