string filepath = "data.txt";
string text = "no file at " + filepath;

// im so extra with the error handling here
try
{
    text = File.ReadAllText(filepath);
}
catch (System.Exception) { }

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: "cors",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200", "http://localhost");
        }
    );
});

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.MapGet(
    "/",
    () =>
    {
        return 0;
    }
);

// return file data here
app.MapGet(
    "/file",
    () =>
    {
        return new FileContent(text);
    }
);
app.UseHttpsRedirection();
app.UseCors("cors");
app.Run();
