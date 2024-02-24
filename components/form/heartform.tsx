import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";

const formSchema = z.object({
  Age: z.number().min(0).max(99), // Restricting to a single digit
  Sex: z.number().min(0).max(1), // Assuming only 0 or 1 are valid
  RestingBP: z.number().min(0),
  FastingBS: z.number().min(0),
  MaxHR: z.number().min(0),
  ExerciseAngina: z.number().min(0).max(1), // Assuming only 0 or 1 are valid
  ChestPainType_0: z.number().min(0).max(1), // Assuming only 0 or 1 are valid
  ChestPainType_1: z.number().min(0).max(1), // Assuming only 0 or 1 are valid
  ChestPainType_2: z.number().min(0).max(1), // Assuming only 0 or 1 are valid
  ChestPainType_3: z.number().min(0).max(1), // Assuming only 0 or 1 are valid
});

export default function HeartForm() {
  const [predictData, setpredictData] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Age: 0,
      Sex: 0,
      RestingBP: 0,
      FastingBS: 0,
      MaxHR: 0,
      ExerciseAngina: 0,
      ChestPainType_0: 0,
      ChestPainType_1: 0,
      ChestPainType_2: 0,
      ChestPainType_3: 0,
    },
  });

  const HandleSubmit = (values: z.infer<typeof formSchema>) => {
    const formData = {
      Age: values.Age,
      Sex: values.Sex,
      RestingBP: values.RestingBP,
      FastingBS: values.FastingBS,
      MaxHR: values.MaxHR,
      ExerciseAngina: values.ExerciseAngina,
      ChestPainType_0: values.ChestPainType_0,
      ChestPainType_1: values.ChestPainType_1,
      ChestPainType_2: values.ChestPainType_2,
      ChestPainType_3: values.ChestPainType_3,
    };

    fetch("http://34.131.74.135:5000/predict_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main className="flex w-full pt-16 items-center justify-center">
      {predictData && (
        <div>
          <h2>API Response Data </h2>
          <h1>{JSON.stringify(predictData, null, 2)}</h1>
        </div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(HandleSubmit)}
          className="w-full stretch gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          <FormField
            control={form.control}
            name="Age"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input Age"
                      type="number"
                      {...field}
                      min="0"
                      max="99"
                      onChange={(e) =>
                        form.setValue("Age", parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="Sex"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Sex</FormLabel>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("Sex", parseInt(value))
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Male</SelectItem>
                      <SelectItem value="0">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="RestingBP"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Rest Blood Pressure</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      type="number"
                      {...field}
                      onChange={(e) =>
                        form.setValue("RestingBP", parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="FastingBS"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Fasting Blood Sugar</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      type="number"
                      {...field}
                      onChange={(e) =>
                        form.setValue("FastingBS", parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="MaxHR"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Maximum Heart Rate</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      type="number"
                      {...field}
                      min="0"
                      max="999"
                      onChange={(e) =>
                        form.setValue("MaxHR", parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="ExerciseAngina"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Excercise Angina</FormLabel>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("ExerciseAngina", parseInt(value))
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="ChestPainType_0"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Typical Angina</FormLabel>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("ChestPainType_0", parseInt(value))
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="ChestPainType_1"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Atypical Angina</FormLabel>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("ChestPainType_0", parseInt(value))
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="ChestPainType_2"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Non-Anginal Pain</FormLabel>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("ChestPainType_2", parseInt(value))
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="ChestPainType_3"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Asymptomatic</FormLabel>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("ChestPainType_3", parseInt(value))
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yes</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
