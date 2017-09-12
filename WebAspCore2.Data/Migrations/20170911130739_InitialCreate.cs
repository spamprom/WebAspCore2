using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WebAspCore2.Data.Migrations
{
    //dotnet ef --startup-project ../WebAspCore2/  migrations add InitialCreate
    //dotnet ef --startup-project ../WebAspCore2/  migrations add typemoney
    //dotnet ef --startup-project ../WebAspCore2/ database update
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Moneys",
                columns: table => new
                {
                    MoneyID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShortName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Moneys", x => x.MoneyID);
                });

            migrationBuilder.CreateTable(
                name: "ExchangeRates",
                columns: table => new
                {
                    ExchangeRateID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ExchangeRateType = table.Column<int>(type: "int", nullable: false),
                    MoneyID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Value = table.Column<decimal>(type: "decimal(18, 2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExchangeRates", x => x.ExchangeRateID);
                    table.ForeignKey(
                        name: "FK_ExchangeRates_Moneys_MoneyID",
                        column: x => x.MoneyID,
                        principalTable: "Moneys",
                        principalColumn: "MoneyID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ExchangeRates_MoneyID",
                table: "ExchangeRates",
                column: "MoneyID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExchangeRates");

            migrationBuilder.DropTable(
                name: "Moneys");
        }
    }
}
